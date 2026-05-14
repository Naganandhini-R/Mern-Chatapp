import { Link } from "react-router-dom";
import { useState } from "react";
import useSignup from "../../hooks/useSignup";

const SignUp = () => {
	const [inputs, setInputs] = useState({
		fullName: "",
		username: "",
		password: "",
		confirmPassword: "",
		gender: "",
	});

	const { loading, signup } = useSignup();

	const handleCheckboxChange = (gender) => {
		setInputs({ ...inputs, gender });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		await signup(inputs);
	};

	return (
		<div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
			<div className=' max-w-md w-full p-6 rounded-2xl shadow-2xl absolute bg-black/60 bg-clip-padding backdrop-filter backdrop-saturate-250 bg-opacity-0'>
				<h1 className='text-3xl font-semibold text-center text-gray-300'>
					Sign Up <span className='text-blue-500 font-normal'>ChatApp</span>
				</h1>

				<form onSubmit={handleSubmit}>
					<div>
						<label className='label p-2'>
							<span className='text-base label-text'>Full Name</span>
						</label>
						<input
							type='text'
							placeholder='Enter your full name'
							className='w-full input input-bordered h-10'
							value={inputs.fullName}
							onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}
						/>
					</div>

					<div>
						<label className='label p-2'>
							<span className='text-base label-text'>Username</span>
						</label>
						<input
							type='text'
							placeholder='Choose a username'
							className='w-full input input-bordered h-10'
							value={inputs.username}
							onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
						/>
					</div>

					<div>
						<label className='label'>
							<span className='text-base label-text'>Password</span>
						</label>
						<input
							type='password'
							placeholder='Enter Password'
							className='w-full input input-bordered h-10'
							value={inputs.password}
							onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
						/>
					</div>

					<div>
						<label className='label'>
							<span className='text-base label-text'>Confirm Password</span>
						</label>
						<input
							type='password'
							placeholder='Confirm Password'
							className='w-full input input-bordered h-10'
							value={inputs.confirmPassword}
							onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })}
						/>
					</div>

					<div className="flex gap-4 py-3">
						<label className="flex items-center cursor-pointer">
							<input
								type="radio"
								name="gender"
								value="male"
								checked={inputs.gender === "male"}
								onChange={() => handleCheckboxChange("male")}
								className="sr-only"
							/>
							<div className={`w-4 h-4 rounded-full border-2 mr-2 transition-all duration-200 ${
								inputs.gender === "male"
									? "border-blue-500 bg-blue-500"
									: "border-gray-400 bg-transparent"
							}`}>
								{inputs.gender === "male" && (
									<div className="w-2 h-2 bg-white rounded-full mx-auto mt-0.5"></div>
								)}
							</div>
							<span className="text-white/80 text-sm">Male</span>
						</label>

						<label className="flex items-center cursor-pointer">
							<input
								type="radio"
								name="gender"
								value="female"
								checked={inputs.gender === "female"}
								onChange={() => handleCheckboxChange("female")}
								className="sr-only"
							/>
							<div className={`w-4 h-4 rounded-full border-2 mr-2 transition-all duration-200 ${
								inputs.gender === "female"
									? "border-blue-500 bg-blue-500"
									: "border-gray-400 bg-transparent"
							}`}>
								{inputs.gender === "female" && (
									<div className="w-2 h-2 bg-white rounded-full mx-auto mt-0.5"></div>
								)}
							</div>
							<span className="text-white/80 text-sm">Female</span>
						</label>
					</div>

					<Link
						to={"/login"}
						className='text-sm hover:underline hover:text-blue-500 mt-2 inline-block'
					>
						Already have an account?
					</Link>

					<div>
						<button className='btn btn-block btn-sm mt-2 border border-slate-700' disabled={loading}>
							{loading ? <span className='loading loading-spinner'></span> : "Sign Up"}
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default SignUp;
