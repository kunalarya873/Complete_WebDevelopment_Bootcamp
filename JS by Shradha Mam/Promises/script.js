const getPromises = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Fetching Data1...',
            resolve('success')
            ), 4000});
        
    });
};