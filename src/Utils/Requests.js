

export const getEventData = async () => {
    const URL = "https://prod-179.westeurope.logic.azure.com/workflows/7c84997dd6894507a60796acb06e5c43/triggers/manual/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=6hFoizfo2w62d0iQK_Zyt7a3Ycr9akAkXdCPAG0ecwQ&usr=4b6f6e7374616e74696e6f73416e6472656f75"
    
    const options = {
        method: "POST"
    }

    const req = await fetch(URL, options)
    const data = await req.json()

    return data
}