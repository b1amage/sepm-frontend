import React from "react";

const Skeleton = () => {
	return (
		<div className="animate-pulse grid shadow-xl shrink-0 snap-start grid-cols-3 gap-3 md:gap-6 p-2 overflow-hidden rounded-lg place-items-center h-[150px] md:h-[175px] w-full max-w-[350px] mr-3">
			<div className="w-full h-full md:max-w-[175px] md:max-h-[120px] max-w-[120px] max-h-[100px] rounded-lg overflow-hidden bg-slate-400"></div>

			<div className="flex flex-col items-start justify-start w-full h-full col-span-2 col-start-2">
				<div className="mb-1">
					<div className="mt-2 font-bold rounded-md md:text-lg bg-slate-400"></div>
					<div className="">
						<div className="w-[100px] h-3 abc bg-slate-400 my-5 rounded-md"></div>
						<div className="w-[100px] h-3 abc bg-slate-400 mb-3 rounded-md"></div>
					</div>
				</div>

				<div className="flex flex-1 space-x-2">
					{Array(5)
						.fill()
						.map((_, index) => (
							<div
								className="w-3 h-3 rounded-md bg-slate-400"
								key={index}
							></div>
						))}
				</div>

				<div className="flex items-center justify-between w-full mt-3">
					<div className="font-bold bg-slate-400 w-[20px] h-3 rounded-md"></div>

					<div className="text-[10px] btn-sm bg-slate-400 w-[50px] rounded-md"></div>
				</div>
			</div>
		</div>
	);
};

export default Skeleton;
