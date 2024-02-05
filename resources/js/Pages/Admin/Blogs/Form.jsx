import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import React, { useState } from "react";
import { index_url, page_name, store_url, update_url } from "./details";
import { Head, useForm } from "@inertiajs/react";
import Card, { CardBody, CardFooter, CardHeader } from "@/Components/Card";
import DynamicForm from "@/Components/DynamicForm";
import PrimaryButton from "@/Components/PrimaryButton";
import Swal from "sweetalert2";
import SecondaryButton from "@/Components/SecondaryButton";
import FileUpload from "@/Components/FileUpload";

function Form({ auth, mustVerifyEmail, status, item }) {
    const { data, setData, post, put, processing, errors, reset } = useForm(
        item || {}
    );

    let [imagePreview, setImagePreview] = useState(
        item ? item.image_url : null
    );
    let title = `${data.id ? "Update" : "Create"} ${page_name}`;

    const handleChange = (e) => {
        setData(e.target.name, e.target.value);
    };

    const formInputs = [
        {
            name: "image_url",
            type: "file",
            required: true,
        },
        {
            name: "title",
            type: "text",
            required: true,
        },
        {
            name: "content",
            type: "editor",
            required: true,
        },
        {
            name: "status",
            type: "select",
            required: true,
            options: [
                { name: "Draft", id: 2 },
                { name: "Published", id: 1 },
            ],
        },
    ];

    const submit = () => {
        if (data.id) {
            put(route(update_url, data.id), {
                onSuccess: () => {
                    Swal.fire("Good job!", "Data is updated!", "success");
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
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="col-span-1 md:col-span-2">
                            <Card className="mb-5">
                                <CardBody>
                                    <DynamicForm
                                        setData={setData}
                                        handleChange={handleChange}
                                        data={data}
                                        errors={errors}
                                        inputs={formInputs}
                                    />

                                    <CardFooter>
                                        <PrimaryButton
                                            className="mr-2"
                                            onClick={submit}
                                        >
                                            Submit
                                        </PrimaryButton>
                                        <SecondaryButton
                                            href={route(index_url)}
                                        >
                                            Cancel
                                        </SecondaryButton>
                                    </CardFooter>
                                </CardBody>
                            </Card>
                        </div>

                        <div className="col-span-1 md:col-span-1">
                            <Card className="mb-5">
                                <CardHeader>Image</CardHeader>
                                <CardBody>
                                    <FileUpload selected={imagePreview} />
                                </CardBody>
                            </Card>
                            {data.id && (
                                <Card>
                                    <CardBody>
                                        <table className="w-full">
                                            <tr>
                                                <th className="p-2 border">Created at</th>
                                                <td className="p-2 border">{data.created_at}</td>
                                            </tr>
                                            <tr>
                                                <th className="p-2 border">Last Updated </th>
                                                <td className="p-2 border">{data.updated_at}</td>
                                            </tr>
                                            <tr>
                                                <th className="p-2 border">Created By </th>
                                                <td className="p-2 border">{data.creator.name}</td>
                                            </tr>
                                        </table>
                                    </CardBody>
                                </Card>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

export default Form;
