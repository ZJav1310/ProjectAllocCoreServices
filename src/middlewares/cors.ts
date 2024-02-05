const cors = async (req: any, res: any, next: any) => {
    
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Origin', 'http://localhost:8080')
    next()
}

export default cors;