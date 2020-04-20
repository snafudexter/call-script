fetch('https://codifyinditest.com/script_test/api-test/').then(async (resp) => {
    let response = await resp.json();
    var data = response['script test']

    if (data.labels)
        $('#label').html(data.labels)

    if (data.phone_number)
        $('#btn').html(data.phone_number)

}).catch((err) => {
    console.error(err)
})