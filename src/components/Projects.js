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
	{
		title: 'Multi-Modal AI Chatbot for Health Insights',
		link: 'https://github.com/aishanee-sinha/Multimodal-RAG-Chatbot',
		description: (
			<>
				Developed a context-aware multimodal AI system leveraging LLMs and Pinecone vector database to synthesize insights from both text and medical images.
				<br />
				Integrated advanced RAG (Retrieval-Augmented Generation) capabilities to enable intelligent analysis and retrieval of medical information.
				<br />
				Designed to provide context-aware health recommendations by intelligently processing and connecting textual and visual medical data.
			</>
		),
		technologies: [
			'LLMs',
			'Pinecone',
			'Vector Databases',
			'Multimodal Processing',
			'RAG',
			'Python',
			'Medical AI',
		],
	},
	{
		title: 'Adaptive Multi-Modal Brain Tumor Segmentation',
		link: '',
		description: (
			<>
				Advanced deep learning project focused on segmenting brain tumors from high-dimensional MRI data using complex neural architectures.
				<br />
				Implemented meta-learning approaches that significantly outperformed traditional fine-tuned models, achieving over 70% performance improvement on the BraTS 2023 dataset.
				<br />
				Conducted sophisticated model evaluation, hyperparameter tuning, and comprehensive error analysis to ensure clinical-grade diagnostic accuracy and clinical applicability.
			</>
		),
		technologies: [
			'Meta-Learning',
			'Deep Learning',
			'PyTorch',
			'MRI Data',
			'Medical Imaging',
			'Neural Networks',
			'Segmentation',
			'Model Evaluation',
		],
	},
	{
		title: 'Airline Delay Analysis',
		link: '',
		description: (
			<>
				High-scale big data project processing 31M+ airline records to analyze delay patterns and predictive factors.
				<br />
				Leveraged Apache Spark for distributed data processing and AWS S3 for scalable data storage and partitioning.
				<br />
				Implemented efficient data pipelines to handle massive datasets while extracting actionable insights from complex aviation data.
			</>
		),
		technologies: [
			'Apache Spark',
			'AWS S3',
			'Big Data',
			'Python',
			'Data Engineering',
			'ETL',
			'SQL',
		],
	},
	{
		title: 'Emotion-Aware Transformer-Based Text-to-Speech System',
		link: '',
		description: (
			<>
				Developed an end-to-end emotion-conditioned TTS pipeline from scratch using PyTorch and a sophisticated Transformer architecture.
				<br />
				Implemented custom text-to-mel spectrogram generation and Griffin-Lim based waveform inversion pipeline for high-quality audio synthesis.
				<br />
				Integrated emotion conditioning to enable expressive speech synthesis that adapts tone and prosody based on emotional context.
			</>
		),
		technologies: [
			'PyTorch',
			'Transformers',
			'Text-to-Speech',
			'Deep Learning',
			'Audio Processing',
			'Waveform Generation',
			'NLP',
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