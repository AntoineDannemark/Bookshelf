import React, {Component} from "react";
import Userdata from "../../datas/userlist.json";
class UserListDisplay extends Component {
    render() {
        return (
            <div>
                <p className="white">{"Liste de tous les users"}</p>
                <select className="movementselect">
                    {Userdata.map(userDetail => {
                        return (
                            <option>
                                {`${userDetail.last_name} ${
                                    userDetail.first_name
                                }, promo  ${userDetail.promotion}`}
                            </option>
                        );
                    })}
                </select>
            </div>
        );
    }
}
export default UserListDisplay;
