import { useEffect, useState } from "react";
import Table from "../components/Table";
import { userListColumn } from "../utils/userListColumns";
import { toast } from "react-toastify";
import Loader from './../components/Loader';
import { userService } from "../services/userServices";
import UserEditFields from "../components/userEditFields";
import { useNavigate } from "react-router-dom";
import { fetchServices } from "../redux/action/user.action";
import { useDispatch } from "react-redux";

const UserList = () => {
    const [loader, setLoader] = useState(false);
    const [userList, setUserList] = useState(null);
    const [showForm, setShowForm] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const fetchData = async () => {
        setLoader(true);
        try {
            const res = await userService.getUserList();
            setUserList(res?.data?.result);
        } catch (err) {
            toast.error(err?.message);
        } finally {
            setLoader(false);
        }
    }

    const fetchServiceList = async () => {
        try {
            const res = await userService.getServices();
            dispatch(fetchServices(res?.data?.result));
        } catch (err) {
            toast.error(err?.message);
        }
    }

    useEffect(() => {
        fetchData();
        fetchServiceList();
        // eslint-disable-next-line
    }, []);

    return (
        <>
            {loader ? 
                <Loader/> :
                <>
                    {!showForm ? 
                        <Table 
                            data={userList} 
                            columns={userListColumn} 
                            buttonLabel={"Add User"} 
                            buttonClick={() => setShowForm(true)}
                            onRowClick={(e) => navigate(`${e?.row?._id}`)}
                        />
                        : 
                        <UserEditFields closeForm={(e, payload) => {
                            setShowForm(e);
                            if (payload) {
                                setUserList([
                                    ...(userList || []),
                                    payload
                                ]);
                            }
                        }}/>
                    }
                </>
            }
        </>
    )
}

export default UserList;