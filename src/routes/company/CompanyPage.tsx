import { useEffect } from 'react';
import { useParams } from 'react-router';
import BeatLoader from 'react-spinners/BeatLoader';
import Company from '../../company/Company.component';
import EditCompany from '../../company/edit-company/EditCompany.component';
import { getCompanyById } from '../../store/features/company/companySlice';
import { useAppDispatch, useAppSelector } from '../../store/hooks';

const CompanyPage = () => {
	const { id } = useParams();
	const dispatch = useAppDispatch();
	const { isLoading, isEditting } = useAppSelector((state) => state.company);
	useEffect(() => {
		dispatch(getCompanyById(id));
	}, [id, dispatch]);
	return (
		<>
			{isLoading ? (
				<div className="text-center p-20">
					<BeatLoader color="#ffffff" />
				</div>
			) : (
				<>{isEditting ? <EditCompany /> : <Company />}</>
			)}
		</>
	);
};

export default CompanyPage;
