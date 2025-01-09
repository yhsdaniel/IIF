import React, { useState } from 'react'
import Modal from '../../../components/Modal'
import '../../Modal-Cart/css/style.min.css'
import './css/style.min.css'

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function FinancialFindims({ title, onClose }) {
    const [formData, setFormData] = useState({
        orderDate: "19 Jan 2024",
        accountType: "",
        budgetAccount: "",
        fixedAssetNumber: "",
        taxGroup: "",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
    };
    return (
        <Modal>
            <div className="financial-findims">
                <div className='financial-modal-header'>
                    <h2>{title}</h2>
                    <span onClick={onClose}>X</span>
                </div>
                <form onSubmit={handleSubmit}>
                    <label>
                        Order Date<span>*</span>
                        <input
                            type="date"
                            name="orderDate"
                            value={formData.orderDate}
                            onChange={handleInputChange}
                            readOnly
                        />
                    </label>

                    <label>
                        Account Type<span>*</span>
                        <select
                            name="accountType"
                            value={formData.accountType}
                            onChange={handleInputChange}
                        >
                            <option value="">Please Select</option>
                            <option value="expense">Expense</option>
                            <option value="prepaid">Prepaid</option>
                        </select>
                    </label>

                    <label>
                        Budget Account<span>*</span>
                        <select
                            name="budgetAccount"
                            value={formData.budgetAccount}
                            onChange={handleInputChange}
                        >
                            <option value="">Please Select</option>
                            <option value="budget1">106101/OTHER RECEIVABLES</option>
                            <option value="budget2">106104/OTHER RECEIVABLES - NON ADVISO</option>
                            <option value="budget2">108101/PREPAID EXPENSE - RENT OFFICE</option>
                            <option value="budget2">108102/PREPAID EXPENSE - MEDICAL INSURANCE</option>
                        </select>
                    </label>

                    <label>
                        Fixed Asset Number
                        <span>" (Please fill this field Account type is 'Prepaid')"</span>
                        <select
                            name="fixedAssetNumber"
                            value={formData.fixedAssetNumber}
                            onChange={handleInputChange}
                        >
                            <option value="">Please Select</option>
                            <option value="asset1">PRPRK-000066/PARKING PER AUG - SEP 19</option>
                            <option value="asset2">CIPBLD-000038/10GBASE-SR SFP Module, Enterpr</option>
                            <option value="asset2">PRUTL-000021/BLOMMBERG PER JUL - SEP 21</option>
                            <option value="asset2">CIPBLD -00217/Spark Shared Device Count (A-S)</option>
                        </select>
                    </label>

                    <label>
                        Tax Group
                        <select
                            name="taxGroup"
                            value={formData.taxGroup}
                            onChange={handleInputChange}
                        >
                            <option value="">Please Select</option>
                            <option value="tax1">PPN 10% & PPH 21 - 2,5%</option>
                            <option value="tax2">PPN 10% & PPH 23 - 2%</option>
                            <option value="tax2">PPN 10% & PPH 23 - 2,5%</option>
                            <option value="tax2">PPN 10% & PPH 23 - 3%</option>
                        </select>
                    </label>

                    <div className="total-price">
                        <p>Total Price</p>
                        <input type="text" value={'-'} />
                    </div>

                    <button type="submit">Create PO</button>
                </form>
            </div>
        </Modal>
    )
}
