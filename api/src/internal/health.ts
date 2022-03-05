import { Request, Response } from 'express'

export const healthChecker = (_req: Request, res: Response) => {
    /**
    * @todo improve this verification
   */
    res.status(200).json({
        status: 'success',
        message: 'Server is running',
    })
}
