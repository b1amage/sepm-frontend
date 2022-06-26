import React from "react";

const AboutCard = ({ name, role, sid, img, tasks }) => {
	return (
		<div className="grid gap-10 py-5 mb-3 lg:mb-5 lg:grid-cols-2">
			<div className="mx-auto ">
				<img src={img} alt="" className="object-cover w-full h-full" />
			</div>

			<div className="flex flex-col self-end w-full space-y-4 overflow-hidden transition-all duration-300 shadow-lg hover:-translate-y-2 md:text-2xl md:h-4/5 mockup-code bg-white-800 dark:bg-black-400">
				<pre data-prefix="$" className="font-bold bg-green-400">
					<code>{name}</code>
				</pre>

				<pre data-prefix=">" className="font-bold">
					<code>{sid}</code>
				</pre>

				<pre data-prefix=">" className="font-bold">
					<code>{role}</code>
				</pre>

				{tasks.length > 0 &&
					tasks.map((item, index) => (
						<pre data-prefix="~" className="py-2" key={index}>
							<code>{item}</code>
						</pre>
					))}
			</div>
		</div>
	);
};

export default AboutCard;
