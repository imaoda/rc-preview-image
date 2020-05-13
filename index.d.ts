interface Option {
    /** 调用成功、失败执行 */
    complete?: (res: General.CallbackResult) => void
    /** 当前显示图片的index */
    current?: number
    /** 失败回调 */
    fail?: (res: General.CallbackResult) => void
    /** 成功回调 */
    success?: (res: General.CallbackResult) => void
}

export default function previewImage (url: string | string[], param?: Option): Promise<any> {}