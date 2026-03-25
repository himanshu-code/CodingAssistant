from app.agents.explain_agent import ExplainAgent
from app.agents.debug_agent import DebugAgent
from app.agents.generate_agent import GenerateAgent
from app.services.gemini_service import generate_response
from app.core.logger import logger

explainAgent=ExplainAgent()
debugAgent=DebugAgent()
generateAgent=GenerateAgent()

def classify_query(query:str)->str:
    """use gemini to classify the query as either 'explain' or 'debug'"""
    prompt=f"""
    You are an AI Classifier.
    Classify the user query into one of the following categories:
    - debug
    - explain
    - generate
    
    only return ONE word from the above options.

    Query:{query} 
    """
    try:
        response=generate_response(prompt).lower().strip()
        logger.info(f"Classification response: {response}")
        return response
    except Exception as e:
        logger.error(f"Error classifying query: {str(e)}")
        return "error"
    
def handle_query(message: str) -> str:
    agent_type=classify_query(message)
    if "debug" in agent_type:
        return debugAgent.run(message)
    elif "explain" in agent_type:
        return explainAgent.run(message)
    else:
        logger.warning(f"Unable to classify query: {message}")
    return f"Received: {message}"
