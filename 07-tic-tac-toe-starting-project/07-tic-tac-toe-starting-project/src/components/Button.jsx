export default function Button({playerSymbol, onPlayerClick}){
    return(
        <>
        <button onClick={onPlayerClick} disabled={playerSymbol!=null}>{playerSymbol}</button>
        </>
        );
}