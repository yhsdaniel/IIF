import React, { useState } from "react";
import {
    Container,
    Typography,
    Box,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Button,
    MenuItem,
    Select,
    TextField,
    IconButton,
} from "@mui/material";
import { Visibility, Delete, CloudUpload } from "@mui/icons-material";
import "./css/style.min.css";
import Layout from "../../components/Layout";

const Request = () => {
    const [statusFilter, setStatusFilter] = useState("");
    const requests = [
        {
            id: 1,
            status: "In Review",
            poNumber: "2024.001/HR&GA",
            itemName: "Thinkpad Ryzen 5 Pro",
            vendor: "Asus",
            rejectionReason: "-",
        },
        {
            id: 2,
            status: "Rejected",
            poNumber: "2024.001/HR&GA",
            itemName: "Product D",
            vendor: "MSBU",
            rejectionReason: "asd",
        },
        {
            id: 3,
            status: "Approved",
            poNumber: "2024.001/HR&GA",
            itemName: "Product F",
            vendor: "Apple",
            rejectionReason: "-",
        },
    ];

    const handleFilterChange = (e) => {
        setStatusFilter(e.target.value);
    };

    return (
        <Layout>
            <Container maxWidth="lg" className="my-request-page">
                <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
                    <Typography variant="h5" fontWeight="bold">
                        My Request
                    </Typography>
                </Box>

                <Typography variant="body2" mb={2}>
                    On this page you can see the progress of your order.
                </Typography>

                <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
                    <Select
                        value={statusFilter}
                        onChange={handleFilterChange}
                        size="small"
                        className="status-filter"
                    >
                        <MenuItem value="">Choose Status</MenuItem>
                        <MenuItem value="In Review">In Review</MenuItem>
                        <MenuItem value="Rejected">Rejected</MenuItem>
                        <MenuItem value="Approved">Approved</MenuItem>
                    </Select>
                    <TextField size="small" placeholder="Search..." className="search-box" />
                </Box>
                <div className="div-table">
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Action</TableCell>
                                <TableCell>Status Approval</TableCell>
                                <TableCell>PO Number Letter</TableCell>
                                <TableCell>Item Name</TableCell>
                                <TableCell>Vendor Name</TableCell>
                                <TableCell>Reason Rejection</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {requests
                                .filter((req) => !statusFilter || req.status === statusFilter)
                                .map((req) => (
                                    <TableRow key={req.id}>
                                        <TableCell>
                                            <Box display="flex" gap={1}>
                                                <IconButton>
                                                    <Visibility />
                                                </IconButton>
                                                {req.status === "Rejected" ? (
                                                    <IconButton>
                                                        <Delete />
                                                    </IconButton>
                                                ) : req.status === "Approved" ? (
                                                    <IconButton color="primary">
                                                        <CloudUpload />
                                                    </IconButton>
                                                ) : null}
                                            </Box>
                                        </TableCell>
                                        <TableCell>
                                            <span className={`status-label ${req.status.toLowerCase().replace(" ", "-")}`}>
                                                {req.status}
                                            </span>
                                        </TableCell>
                                        <TableCell>{req.poNumber}</TableCell>
                                        <TableCell>{req.itemName}</TableCell>
                                        <TableCell>{req.vendor}</TableCell>
                                        <TableCell>{req.rejectionReason}</TableCell>
                                    </TableRow>
                                ))}
                        </TableBody>
                    </Table>

                </div>
            </Container>
        </Layout>
    );
};

export default Request;
