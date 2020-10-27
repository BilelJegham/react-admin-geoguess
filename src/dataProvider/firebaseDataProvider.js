
const dataMockList = {
    data: [{ id: 'fdfd',"Name": 'Michel', 'Player': 3},{ id: 'ddssd',"Name": 'Didier', 'Player': 2}],
    total: 1,
};
export default {
    getList:    (resource, params) => Promise.resolve(dataMockList).then((response) => {
        return {
            ...response,
            data: response.data.sort((a, b)=> {
                console.log(params, params.sort.order === 'ASC')
                if(params.sort.order === 'ASC'){
                    return a[params.sort.field]-b[params.sort.field]
                 }
                return b[params.sort.field]-a[params.sort.field]
            }),
        }     
    }),
    getOne:     (resource, params) => Promise,
    getMany:    (resource, params) => Promise,
    getManyReference: (resource, params) => Promise,
    create:     (resource, params) => Promise,
    update:     (resource, params) => Promise,
    updateMany: (resource, params) => Promise,
    delete:     (resource, params) => Promise,
    deleteMany: (resource, params) => Promise,
}