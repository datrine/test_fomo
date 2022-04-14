export let appColor = "#60941a"


let screenFn = () => {
    if (typeof window!=="object") {
        return
    }
    let screenWidth = window.screen.width
    if (screenWidth < 320) {
        return { screenValue: 1, screenType: "xs", screenWidth ,deviceType:"mobile"}
    }
    if (screenWidth >= 320 && screenWidth < 480) {
        return { screenValue: 2, screenType: "xs", screenWidth ,deviceType:"mobile" }
    }
    if (screenWidth >= 480 && screenWidth < 600) {
        return { screenValue: 3, screenType: "sm", screenWidth  ,deviceType:"mobile"}
    }
    if (screenWidth >= 600 && screenWidth < 768) {
        return { screenValue: 4, screenType: "sm", screenWidth ,deviceType:"tablet" }
    }
    if (screenWidth >= 768 && screenWidth < 900) {
        return { screenValue: 5, screenType: "md", screenWidth ,deviceType:"tablet" }
    }
    if (screenWidth >= 900 && screenWidth < 1024) {
        return { screenValue: 6, screenType: "md", screenWidth ,deviceType:"tablet" }
    }
    if (screenWidth >= 1024 && screenWidth < 1200) {
        return { screenValue: 7, screenType: "md", screenWidth ,deviceType:"pc" }
    }
    if (screenWidth >= 1200 && screenWidth < 1500) {
        return { screenValue: 8, screenType: "lg", screenWidth ,deviceType:"pc" }
    }
    if (screenWidth > 1500) {
        return { screenValue: 9, screenType: "xl", screenWidth }
    }
}
async function middlewareRunner(req, res, middleware) {
    return new Promise((resolve, reject) => {
        //console.log("SAZDSXDXDF");
        middleware(req, res, (result) => {
            if (result instanceof Error) {
                // console.log(result)
                return reject(result);
            }
            //console.log(result)
            return resolve(result);
        });
    })
}

function errorMgt(error) {
    if (typeof error === "string") {
        return { err: { msg: error } }
    }
    if (!!error && typeof error === "object") {
        if (!error.msg) {
            error.msg = error.msg || "Unknown error..."
            return { err: error }
        }
        console.log("error");
        return { err: error }
    }
}


export {
    middlewareRunner,errorMgt,screenFn
};