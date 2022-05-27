import moment from 'moment'
import axios from 'axios'

export const sid = 'acelnugc8tdhthuc06p3nnvnv5'

export const getNestorData = axios.post(
  'https://nestor.divami.com/request.php',
  {
    command: 'getEmployeeListView',
    client: { sid },
    data: { status: 'Active' },
  }
)

const checkImg = async (url: string) => {
  try {
    const res = await axios.get(url)
    if (res.status === 200) {
      return url
    }
    return false
  } catch (_err) {
    return false
  }
}

export const convertDirData = (empDir: any) => {
  return empDir.map((emp: any) => ({
    userId: emp.employeeId,
    userFirstName: emp.firstname,
    userName: emp.firstname + ' ' + emp.lastname,
    userPhoto: 'https://nestor.divami.com' + emp.profilepic, // checkImg("https://nestor.divami.com" + emp.profilepic),
    userDesignation:
      emp.designations && emp.designations.length
        ? emp.designations[emp.designations.length - 1].designation
        : 'Unassigned',
    userJoinedOn: moment(emp.startdate, 'YYYY-MM-DD').format('DD MMM, YYYY'),
    userReportingTo:
      emp.designations && emp.designations.length
        ? emp.designations[emp.designations.length - 1].reportingTo
        : 'null',
  }))
}
