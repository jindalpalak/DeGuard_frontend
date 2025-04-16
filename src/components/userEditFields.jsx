import { useState } from "react";
import { toast } from "react-toastify";
import { FaArrowCircleLeft } from "react-icons/fa";
import { validateRequiredFields } from "../commonFunctions/validation";
import { Button } from "./Button";
import Loader from "./Loader";
import InputField from "./InputField";
import { userService } from "../services/userServices";
import CustomCheckbox from "./checkBox";
import { useNavigate, useParams } from "react-router-dom";
import Toggle from "./Toggle";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const UserEditFields = ({ closeForm }) => {
    const [formData, setFormData] = useState(null);
    const [loader, setLoader] = useState(false);
    const [serviceOption, setServiceOption] = useState(null);
    const {services} = useSelector((state) => state?.user);
    const navigate = useNavigate();
    const { id } = useParams();

    const handleOnChange = (e) => {
        const {name, value} = e?.target;
        setFormData({ ...formData,
            [name]: value 
        });
    }

    const handleSelectCheckBox = (e, name) => {
        setFormData({
            ...formData,
            [name]: e
        })
    }

    const handleSubmit = async () => {
        const userRequiredFields = ['name', 'email', 'password', "services"];
    
        const emptyUserFields = validateRequiredFields(formData, userRequiredFields);
    
        if (emptyUserFields.length > 0) {
            toast.error(`The following fields are required: ${emptyUserFields.join(', ')}`);
            return;
        }
        
        setLoader(true);
        try {
            if (id) {
                const payload = {
                    userId: id,
                    isActive: formData?.isActive,
                    services: formData?.services
                }
                await userService.updateUser(payload);
                navigate("/user");
            } else {
                const serviceList = services?.filter((item) => formData?.services?.includes(item?._id));
                const res = await userService.createUser(formData);
                closeForm(false, {...res?.data?.result, services: serviceList});
            }
        } catch (err) {
            setLoader(false);
            toast.error(err.message);
        } finally {
            setLoader(false);
        }
    };

    useEffect(() => {
        const service = services?.map((item) => {
            return {
                label: item?.name,
                value: item?._id
            }
        })
        setServiceOption(service);
        // eslint-disable-next-line
    }, [])

    const getUserById = async () => {
        setLoader(true);
        try {
            const res = await userService.userDetail(id);
            const service = res?.data?.result?.services?.map((item) => item?._id);
            setFormData({...res?.data?.result, services: service});
        } catch(err) {
            toast.error(err?.message);
        } finally {
            setLoader(false);
        }
    }

    useEffect(() => {
        if(id) {
            getUserById();
        }
        // eslint-disable-next-line
    }, [id]);

    return (
        <div className="list-wrapper">
            {loader && <Loader/>}
            <div className="add-list-wrapper">
                <div className="title">
                    <FaArrowCircleLeft title="Back" onClick={() => {closeForm ? closeForm(false, null) : navigate("/user")}}/>
                    {id ? <h1>User Detail</h1> : <h1>Add User</h1>}
                </div>
                <h1 className="title_header">{id ? "User Detail": "Add User"}</h1>
                <div className="content">
                    <InputField disabled={id} name="name" label="User Name" value={formData?.name} onChange={handleOnChange}/>
                    <InputField disabled={id} name="email" label="Email" value={formData?.email} onChange={handleOnChange}/>
                    <InputField disabled={id} name="password" label="Password" value={formData?.password} onChange={handleOnChange}/>
                    <CustomCheckbox label="Services" options={serviceOption} onChange={(e) => handleSelectCheckBox(e, "services")} selectedValue={formData?.services}/>
                    {id && <Toggle label="Active" checked={formData?.isActive === 1} onChange={(e) => handleSelectCheckBox(e ? 1 : 0, "isActive")}/>}
                </div>
                <Button label={id ? "Update User" : "Add User"} onClick={handleSubmit}/>
            </div>
        </div>
    )
}

export default UserEditFields;