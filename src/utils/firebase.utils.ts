import { initializeApp } from 'firebase/app';
import {
	getFirestore,
	doc,
	getDoc,
	setDoc,
	QueryDocumentSnapshot,
	collection,
	query,
	getDocs,
	where,
	updateDoc,
	arrayUnion,
} from 'firebase/firestore';
import {
	getAuth,
	signInWithPopup,
	GoogleAuthProvider,
	signInWithEmailAndPassword,
	createUserWithEmailAndPassword,
	User,
	NextOrObserver,
	onAuthStateChanged,
	updateProfile,
	signOut,
} from 'firebase/auth';
// import {
// 	ProfileData,
// 	UpdatedFields,
// } from '../../app/features/profile/profileTypes';
// import { JobData } from '../../app/features/job/jobTypes';
import { SignUpFields } from '../store/features/auth/authTypes';
import { CompanyData } from '../store/features/company/companyTypes';
const firebaseConfig = {
	apiKey: 'AIzaSyCg113wgJGlfL1T8B7SwVSO6a-UezmyAas',
	authDomain: 'hireplus-268ed.firebaseapp.com',
	projectId: 'hireplus-268ed',
	storageBucket: 'hireplus-268ed.appspot.com',
	messagingSenderId: '884090567451',
	appId: '1:884090567451:web:0556a5662a9b0d368ff1be',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
	prompt: 'select_account',
});

type AdditionalInfo = {
	displayName?: string;
};

// Firebase setup
export const auth = getAuth();
export const db = getFirestore(firebaseApp);

// Sign in with google helper
export const signInWithGooglePopup = async (
	additionalInfo = {} as AdditionalInfo
) => {
	const { user } = await signInWithPopup(auth, googleProvider);
	await createCompanyDocument(user);
};

// sign up with email and password
export const signUpEmailAndPassword = async (formFields: SignUpFields) => {
	const { email, password, displayName } = formFields;

	const { user } = await createUserWithEmailAndPassword(auth, email, password);
	await updateProfile(user, { displayName });
	await createCompanyDocument(user);
	return user;
};

// Sign in with email and password helper
export const signInEmailAndPassword = async (
	email: string,
	password: string
) => {
	if (!email || !password) return;
	return await signInWithEmailAndPassword(auth, email, password);
};

// create db from signed in user
export const createCompanyDocument = async (
	authUser: User
): Promise<void | QueryDocumentSnapshot<CompanyData>> => {
	if (!authUser) return;
	const companyDocRef = doc(db, 'employers', authUser.uid);

	const companySnapShot = await getDoc(companyDocRef);

	// if user doc doesn't exist, will create one in collection
	if (!companySnapShot.exists()) {
		const { email, displayName } = authUser;
		const createdAt = new Date();

		try {
			await setDoc(companyDocRef, {
				id: authUser.uid,
				createdAt,
				companyName: displayName,
				companyDescription: '',
				companyUrl: '',
				email,
				isHiring: false,
				companySize: '',
				companyType: '',
				jobs: [],
			});
		} catch (error) {
			console.log('error with get user auth and create doc', error);
		}
		return companySnapShot as QueryDocumentSnapshot<CompanyData>;
	}
};

export const logoutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback: NextOrObserver<User>) =>
	onAuthStateChanged(auth, callback);

// ----------- PROFILE API ----------------------------

export const getCompany = async (id: string): Promise<CompanyData[]> => {
	const collectionRef = collection(db, 'employers');
	const q = query(collectionRef, where('id', '==', id));

	const querySnapshot = await getDocs(q);
	return querySnapshot.docs.map((docSnapshot) => {
		return docSnapshot.data() as CompanyData;
	});
};

// export const updateCompanyById = async (data: UpdatedFields) => {
// 	const {
// 		id,
// 		headline,
// 		summary,
// 		skills,
// 		projects,
// 		experience,
// 		isForHire,
// 		websiteURL,
// 	} = data;
// 	const docRef = doc(db, 'employees', id);
// 	const currentDocSnap = await getDoc(docRef);
// 	await updateDoc(docRef, {
// 		isForHire: isForHire ? isForHire : currentDocSnap.data().isForHire,
// 		websiteURL: websiteURL ? websiteURL : currentDocSnap.data().websiteURL,
// 		headline: headline ? headline : currentDocSnap.data().headline,
// 		summary: summary ? summary : currentDocSnap.data().summary,
// 		skills: arrayUnion(...skills),
// 		projects: arrayUnion(...projects),
// 		experience: arrayUnion(...experience),
// 	}).then(() => {
// 		console.log('updated successfully');
// 	});
// };

// ----------- JOB API ----------------------------

// export const getCandidates = async (): Promise<CandidateData[]> => {
// 	const querySnapshot = await getDocs(collection(db, 'employers'));
// 	return querySnapshot.docs.map((doc) => {
// 		// doc.data() is never undefined for query doc snapshots
// 		return doc.data() as CandidateData;
// 	});
// };
