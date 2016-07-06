import jenkins from 'jenkins';
import bluebird from 'bluebird';


const createPromisifiedJenkins = (url, user, pass) => {

  let [protocol, _url] = url.split('://');
  const instance = jenkins(`${protocol}://${user}:${pass}@${_url}`);
  const pJenkins = bluebird.promisifyAll(instance);

  return pJenkins;
}

export default createPromisifiedJenkins;
