import styled from "styled-components";
import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/apiCalls";

import {
    getStorage,
    ref,
    uploadBytesResumable,
    getDownloadURL,
} from "firebase/storage";
import app from "../firebase"

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.unsplash.com/photo-1508615039623-a25605d2b022?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
  display: flex;
  justify-content: center; 
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
  flex-direction: column;
`;

const Button = styled.button`
  border: none;
  padding: 15px 20px;
  color: white;
  margin-bottom: 10px;
  background-color: #fdda5e;
  cursor: pointer;
  font-weight: 500;
  display: flex;
  flex: 1;
  justify-content: center;
  flex-direction: column;
`;

const Select = styled.select`
    width: 250px;
    margin-bottom: 10px;
    display: flex;
    flex-direction: column;
`;

const NewProduct = () => {

    const [inputs, setInputs] = useState({});
    const [file, setFile] = useState(null);
    const [cat, setCat] = useState([]);
    const dispatch = useDispatch();


    const handleChange = (e) => {
        setInputs((prev) => {
            return { ...prev, [e.target.name]: e.target.value };
        });
    };

    const handleCat = (e) => {
        setCat(e.target.value.split(","));
    };

    const handleClick = (e) => {
        e.preventDefault();
        const fileName = new Date().getTime() + file.name; // to avoid duplicate file name
        const storage = getStorage(app);
        const storageRef = ref(storage, fileName);

        const uploadTask = uploadBytesResumable(storageRef, file);

        // Register three observers:
        // 1. 'state_changed' observer, called any time the state changes
        // 2. Error observer, called on failure
        // 3. Completion observer, called on successful completion
        uploadTask.on(
            "state_changed",
            (snapshot) => {
                // Observe state change events such as progress, pause, and resume
                // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                const progress =
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log("Upload is " + progress + "% done");
                switch (snapshot.state) {
                    case "paused":
                        console.log("Upload is paused");
                        break;
                    case "running":
                        console.log("Upload is running");
                        break;
                    default:
                }
            },
            (error) => {
                console.log(error);
            },
            () => {
                // Handle successful uploads on complete
                // For instance, get the download URL: https://firebasestorage.googleapis.com/...
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    const product = { ...inputs, image: downloadURL, categories: cat };
                    console.log(product);
                    addProduct(product, dispatch);
                });
            }
        );

    };

    return (
        <Container>
            <Wrapper>
                <Title>ADD NEW PRODUCT</Title>
                <Form>
                    <Input
                        placeholder="image"
                        required
                        id="file"
                        type="file"
                        onChange={(e) => setFile(e.target.files[0])}
                    />
                    <Input
                        placeholder="title"
                        required
                        type="text"
                        name="title"
                        onChange={handleChange}

                    />
                    <Input
                        placeholder="description..."
                        required
                        type="text"
                        name="description"
                        onChange={handleChange}
                    />
                    <Input
                        placeholder="price"
                        required
                        type="number"
                        name="price"
                        onChange={handleChange}
                    />
                    <Input
                        placeholder="categories"
                        required
                        type="text"
                        onChange={handleCat}
                    />
                    <label>Size?</label>
                    <Select name="size" onChange={handleChange}>
                        <option value="Small">Small</option>
                        <option value="Medium">Medium</option>
                        <option value="Large">Large</option>
                    </Select>

                    <label>in Stock ?</label>
                    <Select name="inStock" onChange={handleChange}>
                        <option value="true">Yes</option>
                        <option value="false">No</option>
                    </Select>
                    <Button onClick={handleClick}>ADD</Button>

                </Form>
            </Wrapper>
        </Container>
    );
}

export default NewProduct;