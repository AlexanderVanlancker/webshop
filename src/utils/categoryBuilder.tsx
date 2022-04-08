export const buildCategory = async (url:string) => {
    const res:any = [];
    try{
        const categoryListResponse = await fetch(url)
        const categoryList = await categoryListResponse.json()
        for(let i=0; i<categoryList.length; i++){
            const category = categoryList[i]
            const firstItemResponse = await fetch("http://localhost:5000/categories/"+category);
            const firstItem = await firstItemResponse.json()

            const imgUrl = firstItem["imgUrls"][0]
            const categoryObj = {
                category,
                imgUrl
            }
            res.push(categoryObj);
        }
    } catch (err){
        console.log("error building category", err)
    }
    return res;
}