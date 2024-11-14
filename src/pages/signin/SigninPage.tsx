import { SigninForm } from '@/widgets/signinForm';

export default function SigninPage() {
    return (
        <div className="relative h-screen">
            <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[400px] w-full">
                <SigninForm />
            </div>
        </div>
    );
}