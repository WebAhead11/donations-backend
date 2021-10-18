import express from "express"
import router from "./router.js"

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(router)
const port = process.env.PORT || 5000

app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`)
})
