import axios from 'axios';
import * as Bluebird from 'bluebird';
import * as API from '../../../constants/api';

class Login {
    login = async (user: any) => {
        try {
            const response = await axios({
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                url: `${API.BASE_URL}signIn`,
                data: JSON.stringify({
                    LoginID: user.LoginID,
                    Password: user.Password,
                }),
            });
            return Bluebird.resolve(response.data);
        } catch (err) {
            return Bluebird.reject(err);
        }
    }
}

export default new Login();
