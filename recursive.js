    function TestConnection(){
        console.log(`Reply from 127.0.0.1\n`);
        setTimeout(TestConnection, 2000);
    }
    TestConnection();