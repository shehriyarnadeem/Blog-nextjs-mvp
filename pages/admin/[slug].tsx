import styles from '@styles/Admin.module.css';
import AuthCheck from '../../components/AuthCheck';
import { firestore, auth, serverTimestamp } from '../../lib/firebase';

import { useState } from 'react';
import { useRouter } from 'next/router';

import { useDocumentDataOnce } from 'react-firebase-hooks/firestore';
import ReactMarkdown from 'react-markdown';
import Link from 'next/link';
import toast from 'react-hot-toast';
function AdminEditpost() {
    return (
        <AuthCheck>
            <h1>U rsigned in</h1>
        </AuthCheck>
    );
}


export default AdminEditpost;
