<?php

namespace App\DataTables;


use App\Models\StudyLeave;
use App\Models\StudyLeaves;
use Yajra\DataTables\Html\Button;
use Yajra\DataTables\Html\Column;
use Illuminate\Support\Facades\Auth;
use Yajra\DataTables\EloquentDataTable;
use Yajra\DataTables\Services\DataTable;
use Yajra\DataTables\Html\Builder as HtmlBuilder;
use Illuminate\Support\Facades\Auth as FacadesAuth;
use Illuminate\Database\Eloquent\Builder as QueryBuilder;

class StudyLeaveDataTable extends DataTable
{
    /**
     * Build the DataTable class.
     *
     * @param QueryBuilder $query Results from query() method.
     */
    public function dataTable(QueryBuilder $query): EloquentDataTable
    {
        return (new EloquentDataTable($query))
            ->addColumn('action', function($model){
                $showView="";
                $html= "";
                $print = '<a href="'.route('studyleave.printSingle',encrypt($model->id)).'" class="btn btn-success"><i class="fa fa-print"></i></a>';
                $deleted = '<a href="" class="dropdown-item">Delete</a>';
                if(in_array($model->status,['pending','rejected'])){
                    $html = $deleted;
                }
                if(in_array($model->status,['pending'])){
                    $showView = $print;
                }
                if(Auth::user()->userType == 'ADMIN'){
                    $showView = $print;
                }
                return '<div style="display: inline-flex">'.$showView . '
                <div class="dropdown">
                  <button type="button" class="btn dropdown-toggle hide-arrow p-0" data-bs-toggle="dropdown" aria-expanded="false">
                    <i class="ti ti-dots-vertical text-muted"></i>
                  </button>
                  <ul class="dropdown-menu dropdown-menu-end" style="">' . $html . '</ul></div></div>';
            })
            ->addColumn('serial_number', function ($row) {
                static $counter = 0;
                $counter++;
                return request('start')+$counter;
            })

            ->addColumn('staffid', function ($row) {
                return $row->staffid;
            })
            ->addColumn('name', function ($row) {
                return $row->name;
            })
            ->addColumn('rank', function ($row) {
                return $row->rank;
            })
            ->addColumn('institution', function ($row) {
                return $row->institution;
            })
            ->addColumn('course', function ($row) {
                return $row->course;
            })
            ->addColumn('district', function ($row) {
                return $row->district;
            })
            ->addColumn('current_school', function ($row) {
                return $row->current_School;
            })
            ->addColumn('status', function ($row) {
                return $row->getHTMLStatus();
            })

            ->rawColumns(['status','serial_number','action'])
            ->setRowId('id');
    }

    /**
     * Get the query source of dataTable.
     */
    public function query(StudyLeaves $model): QueryBuilder
    {
        $query =  $model->newQuery();
        if ($this->request()->has('search') && !empty($this->request()->input('search.value'))) {
            $searchTerm = $this->request()->input('search.value');
             $query->where('staffid', $searchTerm)
                    ->orWhere('regno', 'like', "%{$searchTerm}%")
                    ->orWhere('rank', 'like', "%{$searchTerm}%")
                    ->orWhere('course', 'like', "%{$searchTerm}%")
                    ->orWhere('district', 'like', "%{$searchTerm}%")
                    ->orWhere('institution', 'like', "%{$searchTerm}%")
                    ;
        }

        if($this->request()->has('order')){
            $order = $this->request()->get('order');
            $columns = $this->request()->get('columns');
            $columnIndex = $order[0]['column'];
            $sortDirection = $order[0]['dir'];
            $columnName = $columns[$columnIndex]['data'];
            if ($columnName !== 'serial_number') {
                 $query->orderBy($columnName, $sortDirection);
            }
        }
        return $query;

    }

    /**
     * Optional method if you want to use the html builder.
     */
    public function html(): HtmlBuilder
    {
        return $this->builder()
                    ->setTableId('studyleave-table')
                    ->columns($this->getColumns())
                    ->minifiedAjax()
                    //->dom('Bfrtip')
                    ->orderBy(1)
                    ->selectStyleSingle();

    }

    /**
     * Get the dataTable columns definition.
     */
    public function getColumns(): array
    {
        return [
            Column::make('serial_number')->title('Sr.No')->width(50),
            Column::make('staffid')->title('Staff ID')->searchable(true),
            Column::make('name')->title('Name')->searchable(true),
            Column::make('rank')->title('Rank')->searchable(true),
            Column::make('institution')->title('Institution')->searchable(true),
            Column::make('course')->title('Course')->searchable(true),
            Column::make('district')->title('District')->searchable(true),
            Column::make('current_school')->title('School')->searchable(true),
            Column::make('status')->title('Status')->searchable(true),
            Column::computed('action')
                  ->exportable(false)
                  ->printable(false)
                  ->width(190)
                  ->addClass('text-center'),

        ];
    }

    /**
     * Get the filename for export.
     */
    protected function filename(): string
    {
        return 'StudyLeave_' . date('YmdHis');
    }
}
