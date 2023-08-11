export default function CareerProgressionCard() {
    const currentRank = 'Captain';
    const nextRank = 'Senior Captain';
    const progress = 65; // Progress percentage towards the next rank
    const xpRequiredForNextRank = 1000; // XP required to reach the next rank
    const nextRankBenefits = [
        'Higher flight earnings',
        'Access to advanced aircraft',
        'Exclusive contracts',
    ];

    return (
        <div className="bg-white rounded-lg shadow p-6 mb-6 w-1/2 h-auto flex flex-col">
            <h2 className="text-xl font-semibold mb-4 text-black">Career Progression</h2>
            <div className="mb-4">
                <p className="text-lg font-semibold text-black">Current Rank</p>
                <p className="text-gray-500">{currentRank}</p>
            </div>
            <div className="mb-4">
                <p className="text-lg font-semibold text-black">Next Rank</p>
                <p className="text-gray-500">{nextRank}</p>
            </div>
            <div className="mb-4">
                <p className="text-lg font-semibold text-black">Progress</p>
                <div className="relative h-4 bg-gray-200 rounded-full">
                    <div className="absolute left-0 top-0 h-4 bg-blue-500 rounded-full" style={{ width: `${progress}%` }}></div>
                </div>
                <p className="text-gray-500">{progress}% experience earned</p>
            </div>
            <div className="mb-4">
                <p className="text-lg font-semibold text-black">Requirements</p>
                <p className="text-gray-500">Reach {xpRequiredForNextRank} XP to achieve {nextRank} rank</p>
            </div>
            <div>
                <p className="text-lg font-semibold text-black">Next Rank Benefits</p>
                <ul className="list-disc pl-6 text-gray-500">
                    {nextRankBenefits.map((benefit, index) => (
                        <li key={index}>{benefit}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
