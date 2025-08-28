import React from 'react';

const projects = [
	{
		title: 'AI Travel Planning Assistant',
		link: 'Project Link',
		description: (
			<>
				Built a full-stack AI Travel Planning Chatbot using React.js, FastAPI, and Gemini LLMs to generate customized travel itineraries via natural language inputs.
				<br />
				Integrated real-time APIs for flights, hotel and weather forecasts to provide accurate, up-to-date travel suggestions and direct booking links reducing the need to switch between multiple platforms.
				<br />
				Deployed on Vercel and Render with features like JWT-based authentication, chat history persistence, and interactive itinerary updates, offline itinerary support delivering a seamless, all-in-one planning experience.
			</>
		),
		technologies: [
			'React.js',
			'FastAPI',
			'Gemini LLM',
			'JWT',
			'Vercel',
			'Render',
			'APIs',
		],
	},
	{
		title: 'Airline Delay Analysis and Performance Benchmarking',
		link: 'Project Link',
		description: (
			<>
				Conducted large-scale flight delay analysis on 31M+ flight records (13GB+) from 2020–2024 using Apache Spark for distributed processing and AWS S3 for scalable data storage and management.
				<br />
				Applied K-Means clustering (PySpark MLlib) to identify high-delay clusters and operationally efficient segments, informing strategic route and schedule optimization.
				<br />
				Integrated flight and weather data and built a weather delay prediction model using Logistic Regression in PySpark, achieving 88% accuracy.
			</>
		),
		technologies: [
			'Apache Spark',
			'AWS S3',
			'PySpark MLlib',
			'K-Means',
			'Logistic Regression',
		],
	},
	{
		title: 'Energy Demand Forecasting based on Real-time data and Weather forecasts',
		link: 'Project Link',
		description: (
			<>
				Developed an end-to-end data pipeline using Python, Snowflake, Airflow, dbt, Docker and Power BI to automate energy consumption forecasting, achieving 94% CO2 emissions prediction accuracy with Snowflake ML.
				<br />
				Orchestrated ETL/ELT workflows for real-time data extraction from EIA and Weather APIs, data transformations using dbt and visualization using Power BI.
			</>
		),
		technologies: [
			'Python',
			'Snowflake',
			'Airflow',
			'dbt',
			'Docker',
			'Power BI',
			'APIs',
		],
	},
];

const Projects = () => {
	return (
		<section id="projects" className="py-20 bg-primary">
			<div className="container mx-auto px-4">
				<h2 className="text-4xl font-bold text-lightText mb-12 text-center">
					Projects
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{projects.map((project, index) => (
						<div
							key={index}
							className="bg-secondary rounded-lg p-6 shadow-lg transform hover:scale-105 transition duration-300"
						>
							<h3 className="text-2xl font-bold text-primary mb-4">
								{project.link ? (
									<a
										href={project.link}
										target="_blank"
										rel="noopener noreferrer"
										className="underline"
									>
										{project.title}
									</a>
								) : (
									project.title
								)}
							</h3>
							<p className="text-primary mb-4">{project.description}</p>
							<div className="flex flex-wrap gap-2">
								{project.technologies.map((tech, techIndex) => (
									<span
										key={techIndex}
										className="bg-primary text-lightText px-3 py-1 rounded-full text-sm"
									>
										{tech}
									</span>
								))}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Projects;