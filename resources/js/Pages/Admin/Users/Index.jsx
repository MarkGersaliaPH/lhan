import { Head } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { create_url, destroy_url, edit_url, page_name } from "./details";
import Avatar from "@/Components/Avatar";
import Toggle from "@/Components/Toggle";
import Table from "@/Components/Table";
import Pagination from "@/Components/Pagination";
import Card, { CardBody } from "@/Components/Card";
import PrimaryButton from "@/Components/PrimaryButton";

export default function Index({ auth, mustVerifyEmail, status, items }) {
    const headers = ["Name", "Email", "Created At", "Is Active"];
    const body = items.data.map((data) => ({
        id: data.id, // the user's ID
        data: [
            <span className="flex gap-3 items-center">
                <Avatar src={data.image_url} /> <span>{data.name}</span>
            </span>,
            data.email,
            data.created_at
            // data.is_active,
        ], // the actual row data
    }));

    const actions = {
        destroy: destroy_url,
        edit: edit_url,
    };
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div className="flex justify-between align-middle items-center">
                <h2 className="font-semibold text-xl text-gray-800 leading-tight capitalize">
                    {page_name}
                    </h2>
                    <PrimaryButton href={route(create_url)}>Create</PrimaryButton>
                    </div>
            }
        >
            <Head title="Users" />

            <div className="py-5">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <Card>
                    <CardBody>
                        <Table
                            headers={headers}
                            body={body}
                            actions={actions}
                        />
                        <Pagination items={items} />
                    </CardBody>
                </Card>
            </div>
            </div>
        </AuthenticatedLayout>
    );
}
