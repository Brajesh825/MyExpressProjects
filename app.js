const express = require('express')
const app = express()
const port = 3000

app.use(express.static('./public'))

app.get('/', (req, res) => {
    res.send('Hello World!')
})

// app.get('/api/v1/tasks')             - get all the tasks
// app.post('/api/v1/tasks')            - create a new task
// app.get('/api/v1/tasks/:id')         - get a single task
// app.patch('/api/v1/tasks/:id')       - update task
// app.delete('/api/v1/tasks/:id')      - delete task

app.listen(port, () => {
    console.log(`Server is listening on port ${port}...`)
})