import React from 'react';

const projects = [
	{
		title: 'AI Travel Planning Assistant',
		link: 'https://github.com/aishanee-sinha/AI_Travel_Assistant',
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
		title: 'Energy Demand Forecasting based on Real-time data and Weather forecasts',
		link: 'https://github.com/aishanee-sinha/Energy_demand_forecasting',
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
	{
		title: 'Multi-Agent Autonomous Workforce Assistant',
		link: 'https://github.com/aishanee-sinha/Multi-Agent-Autonomous-Workforce-Assistant',
		description: (
			<>
				Developed a sophisticated multi-agent system using CrewAI framework to automate complex business workflows and task orchestration.
				<br />
				Integrated with LLMs to enable intelligent agents that collaborate and communicate to solve complex problems autonomously.
				<br />
				Implemented agent specialization and role-based task distribution for optimized workforce management and decision-making.
			</>
		),
		technologies: [
			'CrewAI',
			'LLMs',
			'Python',
			'Agent Architecture',
			'Task Orchestration',
		],
	},
	{
		title: 'Multimodal RAG Chatbot',
		link: 'https://github.com/aishanee-sinha/Multimodal-RAG-Chatbot',
		description: (
			<>
				Built an advanced Retrieval-Augmented Generation (RAG) chatbot capable of processing and understanding multimodal inputs including text, images, and documents.
				<br />
				Integrated vector databases for efficient document retrieval and LLMs for intelligent response generation.
				<br />
				Designed to provide context-aware, accurate answers by combining real-time data retrieval with generative AI capabilities.
			</>
		),
		technologies: [
			'RAG',
			'Vector Databases',
			'LLMs',
			'Python',
			'Multimodal Processing',
			'NLP',
		],
	},
	{
		title: 'Stock Price Prediction ETL',
		link: 'https://github.com/aishanee-sinha/Stock-Price-Prediction-ETL',
		description: (
			<>
				Developed a comprehensive ETL pipeline for collecting, processing, and analyzing stock market data.
				<br />
				Implemented machine learning models to predict stock price movements using historical data and technical indicators.
				<br />
				Automated data workflows for real-time data ingestion and model retraining to maintain prediction accuracy.
			</>
		),
		technologies: [
			'Python',
			'ETL',
			'Machine Learning',
			'Time Series Analysis',
			'scikit-learn',
			'APIs',
		],
	},
	{
		title: 'Fine-Tuning Diffusion Models for Text-to-Image Generation',
		link: 'https://github.com/aishanee-sinha/Fine-Tuning-Diffusion-Models-for-Text-to-Image-Generation',
		description: (
			<>
				Advanced research project on fine-tuning state-of-the-art diffusion models for high-quality text-to-image generation.
				<br />
				Optimized model parameters and training strategies to achieve improved image quality and prompt adherence.
				<br />
				Explored techniques for domain-specific fine-tuning and efficient inference for practical applications.
			</>
		),
		technologies: [
			'Diffusion Models',
			'Deep Learning',
			'PyTorch',
			'Computer Vision',
			'Generative AI',
			'Fine-tuning',
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