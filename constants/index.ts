export const headerLinks = [

    {
        label:'Home',
        route: "/",
    },
    {
        label:'create event',
        route: "/events/create",
    },
    {
        label:'My profile',
        route: "/profile",
    },

]
export const eventDefaultValues ={
    title:"",
    description:"",
    location:"",
    imageUrl:"",
    startDateTime: new Date(),
    endDateTime:new Date(),
    categoryId:"",
}