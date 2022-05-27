import './styles.css'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import moment from 'moment'
import TreeNode from './components/TreeNode'
import Tree from './components/Tree'
import { convertDirData, getNestorData, sid } from './utils/utils'
import Lottie from 'react-lottie'
import animationData from './utils/loading-lottie'

var scale = 0.75

export default function App() {
  const [IsLoading, setIsLoading] = useState('loading')
  const [empDirState, setEmpDirState] = useState([])
  const [empDirFullState, setEmpDirFullState] = useState([])

  const scaleCanvas = (numberOfChildren) => {
    let scaleFactor = scale
    let lengthOfChildren = (numberOfChildren + 1) * 183
    let windowWidth = window.innerWidth

    scaleFactor = Number(Number(windowWidth / lengthOfChildren).toFixed(2))
    // console.log("scaleFactor", scaleFactor, lengthOfChildren, windowWidth)
    if (scaleFactor > scale) {
      scaleFactor = scale
    }
    document.getElementById(
      'AppCanvas'
    ).style.transform = `scale(${scaleFactor})`
  }

  const getOrgData = async () => {
    try {
      const res = await axios.post('https://nestor.divami.com/request.php', {
        command: 'getEmployeeListView',
        client: { sid: sid },
        data: { status: 'Active' },
      })
      const empDir = Array.from(res?.data?.data)
      let convertedDir = convertDirData(empDir)
      convertedDir = convertedDir.map((x) => ({
        ...x,
        id: `tree-node-${x.userId}`,
        numberOfChildren: convertedDir.filter(
          (y) => y.userReportingTo === x.userFirstName
        ).length,
      }))
      // const root = convertedDir.find((x) => x.userReportingTo === null);
      setEmpDirState((_prev) => [
        { ...convertedDir[0] },
        ...convertedDir.filter(
          (x) => x.userReportingTo === convertedDir[0].userFirstName
        ),
      ])
      setEmpDirFullState(convertedDir)
    } catch (err) {
      setIsLoading('API Call Failed')
    }
  }

  useEffect(() => {
    getOrgData().catch()
    scaleCanvas(scale)
  }, [])
  useEffect(() => {
    if (IsLoading === 'loading' && document.getElementById('loader')) {
      document.getElementById('loader').scrollIntoView({
        behavior: 'smooth',
        block: 'center',
        inline: 'center',
      })
    }
    if (IsLoading !== 'loading' && document.getElementById('App')) {
      document.getElementById('App').scrollIntoView({
        behavior: 'smooth',
        block: 'center',
        inline: 'center',
      })
    }
    var list = document.getElementById('root').parentElement.children
    for (var i = 0; i < list.length; i++) {
      if (list[i].localName === 'iframe') list[i].remove()
    }
  })

  const genParent = (CurrEmp, Parent) => {
    if (CurrEmp.userReportingTo !== null) {
      const CurrEmpParent = empDirFullState.find(
        (x) => x.userFirstName === CurrEmp.userReportingTo
      )
      return genParent(CurrEmpParent, [CurrEmp, ...Parent])
    } else return [CurrEmp, ...Parent]
  }

  const onNodeClick = (event, emp) => {
    setTimeout(() => {
      document.getElementById(emp.id).scrollIntoView({
        behavior: 'smooth',
        block: 'center',
        inline: 'start',
      })
      scaleCanvas(
        empDirFullState.filter((x) => x.userReportingTo === emp.userFirstName)
          .length
      )
    }, 500)
    event.stopPropagation()
    let parents = []
    parents = genParent(emp, parents)
    const children = empDirFullState.filter(
      (x) => x.userReportingTo === emp.userFirstName
    )
    setEmpDirState((_prev) => [...parents, ...children])
  }

  const genTreeNode = (parentName) => {
    return empDirState
      .filter((emp) => emp.userReportingTo === parentName)
      .map((emp) => (
        <TreeNode emp={emp} onClick={(e) => onNodeClick(e, emp)}>
          {genTreeNode(emp.userFirstName)}
        </TreeNode>
      ))
  }

  return (
    <div className="AppCanvas" id="AppCanvas">
      <div className="App" id="App">
        {empDirState.length > 0 ? (
          <Tree
            lineWidth={'3px'}
            lineColor={'#ccc'}
            lineBorderRadius={'50px'}
            emp={empDirState[0]}
            onClick={(e) => onNodeClick(e, empDirState[0])}
          >
            {genTreeNode(empDirState[0].userFirstName)}
          </Tree>
        ) : (
          <div className="loader" id="loader">
            {IsLoading === 'loading' ? (
              <div>
                <Lottie
                  options={{
                    loop: true,
                    autoplay: true,
                    animationData: animationData,
                    rendererSettings: {
                      preserveAspectRatio: 'xMidYMid slice',
                    },
                  }}
                  height={400}
                  width={500}
                />
                <img
                  className="logo"
                  src="https://www.divami.com/assets/images/divami_logo.svg?1564635070497"
                  alt="Divami Design Labs Logo"
                />
              </div>
            ) : (
              IsLoading
            )}
          </div>
        )}
      </div>
    </div>
  )
}
