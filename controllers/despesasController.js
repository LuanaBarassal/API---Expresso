const supabase = require('../supabaseClient');

exports.criarDespesa = async (req, res) => {
  const despesa = req.body;
  const { data, error } = await supabase.from('despesas').insert([despesa]);

  if (error) return res.status(400).json({ msg: error.message });
  return res.status(201).json({ msg: "Despesa registrada com sucesso" });
};

exports.listarDespesas = async (req, res) => {
  const { data, error } = await supabase.from('despesas').select('*');

  if (error) return res.status(400).json({ msg: error.message });
  return res.status(200).json(data);
};