function fetchData(callback) {
    setTimeout(() => {
        const result = Math.random() > 0.2;
        if (result) {
            const names = ['Yashvi', 'Adina', 'Vaishnavi', 'Shreya'];
            callback(null, names);
        } else {
            const err = "something went wrong ";
            callback(new Error(err), null);
        }
    }, 2000);
}
fetchData((error, data) => {
    if (error) {
        console.error(error.message);
    } else {
        console.log('Success data fetched', data);
    }
});