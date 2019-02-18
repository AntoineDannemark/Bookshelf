import React, {Component} from "react";
import Userdata from "../../datas/userlist.json";
class UserListDisplay extends Component {
    render() {
        return (
            <div className="centeredDropDown">
                <h3>{"Liste de tous les utilisateurs"}</h3>
                <select className="inputtext">
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
