import { SignupForm } from '@/widgets/signupForm';

export default function SignupPage() {
    return (
        <div className="relative h-screen">
            <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[400px] w-full">
                <SignupForm />
            </div>
        </div>
    );
};