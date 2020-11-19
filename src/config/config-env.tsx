interface ConfigEnv {
    baseAPI: string
}

const local: ConfigEnv = {
    baseAPI: 'http://localhost:4000'
};

const production: ConfigEnv = {
    baseAPI: '',
};

export default (() => {
    return process.env.ENV === 'production' ? production : local;
})();
