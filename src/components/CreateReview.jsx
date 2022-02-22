import { Formik } from "formik";
import { View } from "react-native";
import ReviewForm from "./ReviewForm";
import * as yup from 'yup';
import { useMutation } from "@apollo/client";
import { CREATE_REVIEW } from "../graphql/mutations";
import { useNavigate } from "react-router-native";


const validationSchema = yup.object().shape({
    ownerName: yup
        .string()
        .required('Repository owner name is required'),
    repositoryName: yup
        .string()
        .required('Repository name is required'),
    rating: yup
        .number()
        .required('Rating is required')
        .min(0)
        .max(100),
    text: yup
        .string()
});

const CreateReview = () => {
    const navigate = useNavigate();
    const [mutate] = useMutation(CREATE_REVIEW);

    const initialValues = {
        ownerName: '',
        repositoryName: '',
        rating: "",
        text: '',
    };

    const onSubmit = async (values) => {
        const { ownerName, repositoryName, rating, text } = values;
        try {
            const { data } = await mutate({ variables: { 
                review: { 
                    ownerName, 
                    repositoryName, 
                    rating: parseInt(rating), 
                    text 
                } 
            }});
            
            navigate(`/${data.createReview.repositoryId}`);
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <View>
            <Formik
                initialValues={initialValues} 
                onSubmit={onSubmit}
                validationSchema={validationSchema}
                >
                {({ handleSubmit }) => <ReviewForm onSubmit={handleSubmit} />}
            </Formik>
        </View>
    );
};

export default CreateReview;