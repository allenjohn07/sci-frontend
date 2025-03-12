import React from "react";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";

export default function CardComponent({ compImg, name }) {
    return (
        <Card shadow="none" className="border bg-gray-50 py-2">
            <CardBody className="overflow-visible py-0 px-1 md:px-2 flex items-center">
                <Image
                    alt="Card background"
                    className="object-cover h-[200px] sm:h-[300px] md:h-[350px] rounded-xl"
                    src={compImg}
                />
            </CardBody>
            <CardHeader className="pb-0 px-1 sm:px-2 md:px-3 flex-col items-start">
                <p className="text-tiny font-bold text-nowrap">{name}</p>
            </CardHeader>
        </Card>
    );
}
