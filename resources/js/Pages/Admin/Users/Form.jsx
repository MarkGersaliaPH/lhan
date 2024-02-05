import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import React from "react";
import { index_url, page_name, store_url, update_url } from "./details";
import { Head, useForm } from "@inertiajs/react";
import Card, { CardBody, CardFooter } from "@/Components/Card";
import DynamicForm from "@/Components/DynamicForm";
import PrimaryButton from "@/Components/PrimaryButton";
import Swal from "sweetalert2";
import SecondaryButton from "@/Components/SecondaryButton";

function Form({ auth, mustVerifyEmail, status, item }) {
    const { data, setData, post,put, processing, errors, reset } = useForm(
        item || {}
    );

    let title = `${data.id ? "Update" : "Create"} ${page_name}`;

    const handleChange = (e) => {
        setData(e.target.name, e.target.value);
    };

    const formInputs = [
        {
            name: "name",
            type: "text",
            required: true,
        },
        {
            name: "email",
            type: "email",
            required: true,
        },
        {
            name: "Select Me",
            type: "select",
            required: true,
            options: [
                { name: "Option 1", value: 1 },
                { name: "Option 2", value: 2 },
                { name: "Option 3", value: 3 },
            ],
        },
    ];

    
    const submit = () => { 

        if (data.id) { 
            put(route(update_url, data.id), {
                onSuccess: () => {
                    Swal.fire("Good job!", "Data is updated!", "success") 
                },
            });
        } else { 
            post(route(store_url), {
                onSuccess: () => {
                    Swal.fire("Good job!", "Data is created!", "success");
                },
            });
        }
    };


    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div className="flex justify-between align-middle items-center">
                    <h2 className="font-semibold text-xl text-gray-800 leading-tight capitalize">
                        {title}
                    </h2>
                </div>
            }
        >
            <Head title={title} />

            <div className="py-5">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <Card>
                        <CardBody>
                            <form action="">
                            <DynamicForm
                                setData={setData}
                                handleChange={handleChange}
                                data={data}
                                errors={errors}
                                inputs={formInputs}
                                />
                            </form>
                            
                        <CardFooter>
                            <PrimaryButton className="mr-2" onClick={submit}>Submit</PrimaryButton>
                            <SecondaryButton href={route(index_url)}>Cancel</SecondaryButton>
                        </CardFooter>
                        </CardBody>
                    </Card>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

export default Form;
