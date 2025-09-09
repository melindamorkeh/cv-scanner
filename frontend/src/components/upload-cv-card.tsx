import React, { useRef } from "react";

import {
    Card,
    CardAction,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
import { Button } from "@/components/ui/button";



function UploadCVCard() {
    const fileInputRef = useRef<HTMLInputElement | null>(null);

    const handleButtonClick = () => {
        fileInputRef.current?.click();
    };

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            console.log("Selected file:", file);
            // Add upload logic here: sending to backend and storing
        }
    };

    return (
        <Card className="w-full justify-self-center items-center">
            <CardHeader className="w-full">
                <CardTitle className="justify-self-center text-2xl font-semibold">Upload Your CV</CardTitle>
                <CardDescription className = "justify-self-center">
                    Enhance your job search by uploading your CV. This helps us
                    match you with the best opportunities.
                </CardDescription>
                <CardFooter className="justify-self-center">
                    <div className = "text-muted-foreground">
                        Supports PDF, Doc, and Docx Files. Max 10MB size.
                    </div>
                </CardFooter>
            </CardHeader>
            <CardFooter>
                <CardAction>
                    <Button
                        onClick = {handleButtonClick}
                        className = "font-medium text-base rounded-full justify-self-center items-center"
                    >
                        Choose File
                    </Button>
                    <input
                        type="file"
                        ref={fileInputRef}
                        onChange={handleFileChange}
                        accept=".pdf,.doc,.docx"
                        className="hidden"
                    />
                </CardAction>
            </CardFooter>
        </Card>
    );
}

export default UploadCVCard;