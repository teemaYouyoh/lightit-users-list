export default class UserService {
    getUsers = async (value) => {
        let res;

        try {
            res = await fetch(`https://randomuser.me/api/?results=${value}`);
            res = await res.json();
        } catch (err) {
            throw new Error(`Could not fetch; ${res.status}`);
        }

        return res;
    }
}
