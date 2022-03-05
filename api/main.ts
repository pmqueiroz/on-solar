
import express, { Request, Response, NextFunction } from 'express'
import { routes } from './src/routes'

const app = express()

app.use(express.json())
app.use(routes)

app.use((err: Error, _request: Request, response: Response) => {
    /**
    * @todo internal error instance
   */

    // if (err instanceof AppError) {
    // 	return response.status(err.statusCode).json({
    // 		status: 'error',
    // 		message: err.message,
    // 	})
    // }

    console.error(err)

    return response.status(500).json({
        status: 'error',
        message: 'Internal server error',
    })
})

;(({ env, stdout }: NodeJS.Process) => {
    const port = env.PORT || 3000

    app.listen(port, () => {
        stdout.write(`Server is running on port ${port}\n`)
    })
})(process)
