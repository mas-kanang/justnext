export const services_form = [
    {
        data: {
            serviceId: "Batal Aju",
            formDefinition: {
                groups: [
                    {
                        name: "pemohon",
                        label: "Data Pemohon",
                        columns: [
                            {
                                name: "npwp",
                                label: "NPWP",
                                validation: {
                                    type: "plain",
                                    definition: {
                                        required: true,
                                        maxLength: 15,
                                        minLength: 15
                                    }
                                }
                            },
                            {
                                name: "status",
                                label: "Status Importir",
                                validation: {
                                    type: "dbref",
                                    definition: {
                                        required: true,
                                        entity: "ref_status_importir"
                                    }
                                }
                            }
                        ]
                    }
                ],
                attachments: [
                    {
                        name: "Surat Permohonan",
                        maxSize: 5,
                        isRequired: true
                    }
                ]
            }
        }
    }
]