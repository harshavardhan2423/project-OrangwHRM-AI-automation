import dotenv from 'dotenv'
dotenv.config()

const users = {
  admin: {
    username: process.env.ADMIN_USER,
    password: process.env.ADMIN_PASS,
  },
  invalidUser: {
    username: 'wronguser',
    password: 'wrongpass',
  },
}

const employee = {
  firstName: 'Test',
  lastName: 'User',
  employeeId: 'EMP001',
}

const messages = {
  loginError: 'Invalid credentials',
  dashboardTitle: 'Dashboard',
}
 export{users,employee,messages}