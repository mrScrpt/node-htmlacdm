const args = process.argv.slice(2);

//сonsole.log(args);

switch (args[0]){
    case  "--help":
        console.log('помощь по флагу --help');
        break;
    case "-version":
        console.log('v0.0.1');
        break;
    default:
        console.log('Простое приложение');
        console.error('Для просмотра справки по программе, воспользуйтесь флагом --help');
        process.exit(1);

}