import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import axios from 'axios';

const Join = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [address, setAddress] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [birthday, setBirthday] = useState('');
    const [childrenList, setChildrenList] = useState([{ firstName: '', lastName: '', birthday: '' }]);
    const [spouse, setSpouse] = useState({ firstName: '', lastName: '', birthday: '' });

    const handleChildInputChange = (e, index, type) => {
        const list = [...childrenList];
        if (type === 'first') {
            list[index]['firstName'] = e.target.value;
        } else if (type === 'last') {
            list[index]['lastName'] = e.target.value;
        } else if (type === 'dob') {
            list[index]['birthday'] = e.target.value;
        }
        setChildrenList(list);
    };

    const handleSpouseInputChange = (e, type) => {
        const temp = { ...spouse };
        if (type === 'first') {
            temp['firstName'] = e.target.value;
        } else if (type === 'last') {
            temp['lastName'] = e.target.value;
        } else if (type === 'dob') {
            temp['birthday'] = e.target.value;
        }
        setSpouse(temp);
    };

    const handleRemoveClick = (index) => {
        const list = [...childrenList];
        list.splice(index, 1);
        setChildrenList(list);
    };

    const handleAddClick = () => {
        setChildrenList((prevList) => [...prevList, { firstName: '', lastName: '' }]);
    };

    const handleRegister = async () => {
        try {
            await axios.post('/join', {
                firstName,
                lastName,
                address,
                email,
                phoneNumber: phone,
                birthday,
                spouse,
                children: childrenList
            });
            console.log('Registration successful');
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="px-4  my-5 text-center">
                    <h1 className="display-5 fw-bold">Join Us</h1>
                    <div className="col-lg-6 mx-auto">
                        <p className="lead mb-4">Sign up below to receive information about upcoming AlMalikiyah fundraisers and events.</p>
                    </div>
                </div>
                <form>
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-8 col-lg-8 col-xl-6">
                            <div className="row align-items-center mt-4">
                                <h5>Your Information:</h5>
                                <div className="col">
                                    <label htmlFor="firstname">First Name<span style={{ color: "red" }}>*</span></label>
                                    <input
                                        value={firstName}
                                        onChange={(e) => setFirstName(e.target.value)}
                                        name="firstname"
                                        type="firstname"
                                        className="form-control"
                                        id="firstname"
                                        aria-describedby="firstname"
                                        placeholder="First Name"
                                        required
                                    />
                                </div>
                                <div className="col">
                                    <label htmlFor="lastname">Last Name<span style={{ color: "red" }}>*</span></label>
                                    <input
                                        value={lastName}
                                        onChange={(e) => setLastName(e.target.value)}
                                        name="lastname"
                                        type="lastname"
                                        className="form-control"
                                        id="lastname"
                                        aria-describedby="lastname"
                                        placeholder="Last Name"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="row align-items-center mt-4">
                                <div className="col">
                                    <label htmlFor="phone">Phone Number<span style={{ color: "red" }}>*</span></label>
                                    <input
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                        name="phone"
                                        type="tel"
                                        className="form-control"
                                        id="phone"
                                        aria-describedby="phone"
                                        placeholder="Phone Number"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="row align-items-center">
                                <div className="col mt-4">
                                    <label htmlFor="email">Email</label>
                                    <input
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        name="email"
                                        type="email"
                                        className="form-control"
                                        id="email"
                                        aria-describedby="email"
                                        placeholder="Email"
                                    />
                                </div>
                            </div>
                            <div className="row align-items-center">
                                <div className="col mt-4">
                                    <label htmlFor="address">Address</label>
                                    <input
                                        value={address}
                                        onChange={(e) => setAddress(e.target.value)}
                                        name="address"
                                        type="address"
                                        className="form-control"
                                        id="address"
                                        aria-describedby="address"
                                        placeholder="Address"
                                    />
                                </div>
                            </div>
                            <div className="row align-items-center">
                                <div className="col mt-4">
                                    <label htmlFor="birthday">Birthday</label>
                                    <input
                                        value={birthday}
                                        onChange={(e) => setBirthday(e.target.value)}
                                        name="birthday"
                                        type="birthday"
                                        className="form-control"
                                        id="birthday"
                                        aria-describedby="birthday"
                                        placeholder="MM/DD/YYYY"
                                    />
                                </div>
                            </div>

                            <hr className="mt-4" />

                            <div className="row align-items-center mt-4">
                                <h5>Spouse Information:</h5>
                                <div className="row align-items-center ">
                                    <div className="col">
                                        <label htmlFor="firstname">First Name</label>
                                        <input
                                            value={spouse.firstName}
                                            onChange={(e) => handleSpouseInputChange(e, 'first')}
                                            name="firstname"
                                            type="firstname"
                                            className="form-control"
                                            id="firstname"
                                            aria-describedby="firstname"
                                            placeholder="First Name"
                                        />
                                    </div>
                                    <div className="col">
                                        <label htmlFor="lastname">Last Name</label>
                                        <input
                                            value={spouse.lastName}
                                            onChange={(e) => handleSpouseInputChange(e, 'last')}
                                            name="lastname"
                                            type="lastname"
                                            className="form-control"
                                            id="lastname"
                                            aria-describedby="lastname"
                                            placeholder="Last Name"
                                        />
                                    </div>
                                    <div className="col">
                                        <label htmlFor="birthday">Birthday</label>
                                        <input
                                            value={spouse.birthday}
                                            onChange={(e) => handleSpouseInputChange(e, 'dob')}
                                            name="birthday"
                                            type="birthday"
                                            className="form-control"
                                            id="birthday"
                                            aria-describedby="birthday"
                                            placeholder="MM/DD/YYYY"
                                        />
                                    </div>
                                </div>
                            </div>

                            <hr className="mt-4" />

                            <div className="row align-items-center mt-4">
                                <h5>Children Information:</h5>
                                {childrenList.map((child, index) => (
                                    <div className="row align-items-center" key={index}>
                                        <div className="col">
                                            <label htmlFor="firstname">First Name</label>
                                            <input
                                                value={child.firstName}
                                                onChange={(e) => handleChildInputChange(e, index, 'first')}
                                                name="firstname"
                                                type="firstname"
                                                className="form-control"
                                                id="firstname"
                                                aria-describedby="firstname"
                                                placeholder="First Name"
                                            />
                                        </div>
                                        <div className="col">
                                            <label htmlFor="lastname">Last Name</label>
                                            <input
                                                value={child.lastName}
                                                onChange={(e) => handleChildInputChange(e, index, 'last')}
                                                name="lastname"
                                                type="lastname"
                                                className="form-control"
                                                id="lastname"
                                                aria-describedby="lastname"
                                                placeholder="Last Name"
                                            />
                                        </div>
                                        <div className="col">
                                            <label htmlFor="birthday">Birthday</label>
                                            <input
                                                value={child.birthday}
                                                onChange={(e) => handleChildInputChange(e, index, 'dob')}
                                                name="birthday"
                                                type="birthday"
                                                className="form-control"
                                                id="birthday"
                                                aria-describedby="birthday"
                                                placeholder="MM/DD/YYYY"
                                            />
                                        </div>
                                        <div className="btn-box">
                                            {childrenList.length !== 1 && (
                                                <button
                                                    type="button"
                                                    className="btn btn-danger mt-4 mb-4"
                                                    onClick={() => handleRemoveClick(index)}
                                                >
                                                    Remove
                                                </button>
                                            )}
                                            {childrenList.length - 1 === index && (
                                                <button
                                                    type="button"
                                                    className="btn btn-primary mt-4 mb-4"
                                                    onClick={handleAddClick}
                                                >
                                                    Add
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="row justify-content-start mt-4">
                                <div className="col">
                                    <div className="form-check">
                                        <label className="form-check-label">
                                            <input
                                                type="checkbox"
                                                className="form-check-input"
                                                required
                                            />
                                            I consent to receiving emails and WhatsApp notifications about upcoming AlMalikiyah fundraisers and events.
                                        </label>
                                    </div>

                                    <button
                                        className="btn btn-primary mt-4"
                                        onClick={handleRegister}
                                    >
                                        Submit
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <Footer />
        </div>
    );
};

export default Join;
